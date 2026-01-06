CONFIGURATION = 'cordis'
CONFIGURATION = 'common'

def deep_update(from_dict, to_dict):
    for (key, value) in from_dict.iteritems():
        if key in to_dict.keys() and isinstance(to_dict[key], dict) and isinstance(value, dict):
            deep_update(value, to_dict[key])
        else:
            to_dict[key] = value

try:
    modules = os.environ.get('APP_SETTINGS', '').split('.')
    current = __name__
    for name in modules:
        module  = getattr(__import__(current, globals(), locals(), [name]), name)
        current += '.' + name
        current_settings = {}
        for setting in dir(module):
            if setting == setting.upper():
                current_settings[setting] = getattr(module, setting)
        deep_update(current_settings, locals())
except ImportError, e:
    print 'Unable to import configuration: %s' % e

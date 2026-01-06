INSTALLED_APPS = ('whatever',)
try:
    from settings.local import *
except ImportError:
    pass

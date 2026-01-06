from external_config import ExternalConfig
import sys

_filename = ""  # add your config file
_section = "mysection"  # add your config section
_this_module = sys.modules[__name__]
_config = ExternalConfig(_filename, _section)

__all__ = []

for key in _config:
    __all__.append(key)
    value = _config[key]
    setattr(_this_module, key, value)

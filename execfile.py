# Source - https://stackoverflow.com/a
# Posted by Carl Meyer, modified by community. See post 'Timeline' for change history
# Retrieved 2026-01-06, License - CC BY-SA 4.0

$ ls settings/

10-base.conf
20-engines.conf
30-site.conf
...

$ cat settings.py

import os.path
import glob
conffiles = glob.glob(os.path.join(os.path.dirname(__file__), 'settings', '*.conf'))
conffiles.sort()
for f in conffiles:
    execfile(os.path.abspath(f))

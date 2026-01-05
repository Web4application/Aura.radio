# Loop the sample file continuously
s = single("/music/sample.ogg")
s = repeat(s)
output.icecast(%vorbis, host="localhost", port=8000, password="livepassword", mount="/live.ogg", s)

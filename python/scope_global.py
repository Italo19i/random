s = "banana"
print(id(s))

def rev():
  s.replace("b", "z")
  print(id(s))
  return s

print(rev())

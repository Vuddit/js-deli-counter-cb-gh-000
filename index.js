function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (arr) {
  if (arr.length > 0) {
    return `Currently serving ${arr[0]}`
    arr.shift();
    return "There is nobody waiting to be served!"
  }
}

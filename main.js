const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
ghe quick brown fox jumps over the lazy dog.
abbcccdddd
http
`

console.log(str.match(/d$/g)) // 출력: false
console.log(str.match(/d$/gm)) // 출력: (1) ["d"]
console.log(str.match(/^t/gim)) // 대문자 소문자 가리지 않고 찾기
console.log(str.match(/h..p/g))  // 출력: (1) ["https"]
console.log(str.match(/fox|dog/)) // 먼저 찾아 지는 것만 반환
console.log(str.match(/https?/g)) // 출력: (2) ["https", "http"]
export default function handler(request, response) {
  response.status(200).json({
    name: 'Minhee',
    age: 30,
    isValid: true
  })
}
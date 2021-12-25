## HTTP Methods

- GET
- POST
- PUT
- DELETE
- ALL
- USE
- LISTEN
  
---
### General structure of request message
- Request URL
- Request Method
- Status Code : `200 OK`
- Remote Address

---
### General structure of response message
- Request URL
- Request Method
- Status Code : `400 means request error, 404: Not found`
- Remote Address
- We get json data application/json

---

- For http we have port : 80
- For SSH(secure shell) : 22
- For https protocol : port 443

---

### HTTP response status codes
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### MIME
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)

### express.static (static status)
- Built in middleware
- static asset means server doesn't have to change it.
- Common names of folder is "public or static".
- img, css, js files can be added.

---

## API vs SSR(server side rendering)
- API -JSON and SSR - Template
- Send data vs send template
- Res.json() vs res.render()

---

### response.json()
- [https://expressjs.com/en/4x/api.html#res.json](https://expressjs.com/en/4x/api.html#res.json)
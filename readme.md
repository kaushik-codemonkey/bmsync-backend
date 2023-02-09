
# BMSync Backend

Backend for the BMSync extension that handles the bookmarks storage and retrieval.


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

- [@kaushik-codemonkey](https://www.github.com/kaushik-codemonkey)


![Logo](https://drive.google.com/uc?id=1InaCbeP2z2psj61z46NErkLtdFYoZmLR)


const mongoose=require('mongoose')
const Movieschema=new mongoose.Schema(
    {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "alternative_titles": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "year": {
            "type": "integer"
          },
          "image": {
            "type": "string"
          },
          "color": {
            "type": "string"
          },
          "score": {
            "type": "number"
          },
          "rating": {
            "type": "integer"
          },
          "actors": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "actor_facets": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "genre": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "_id",
          "title",
          "alternative_titles",
          "year",
          "image",
          "color",
          "score",
          "rating",
          "actors",
          "actor_facets",
          "genre"
        ]
      }
)
module.export=mongoose.model("MovieAPP",Movieschema)
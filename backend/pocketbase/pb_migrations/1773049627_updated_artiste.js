/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // remove field
  collection.fields.removeById("text2810357431")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select2810357431",
    "maxSelect": 1,
    "name": "genre_artiste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "house",
      "hardcore"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_223627941")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2810357431",
    "max": 0,
    "min": 0,
    "name": "genre_artiste",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2810357431")

  return app.save(collection)
})

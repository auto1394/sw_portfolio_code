export default class CatInfo {
  constructor(
    id = undefined
    , name = undefined
    , description = undefined
    , lifeSpan = undefined
    , wikipediaUrl = undefined
    , referenceImageId = undefined
    , imageId = undefined
    , imageWidth = undefined
    , imageHeight = undefined
    , imageUrl = undefined
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.lifeSpan = lifeSpan
    this.wikipediaUrl = wikipediaUrl
    this.referenceImageId = referenceImageId
    this.imageId = imageId
    this.imageWidth = imageWidth
    this.imageHeight = imageHeight
    this.imageUrl = imageUrl
  }
}
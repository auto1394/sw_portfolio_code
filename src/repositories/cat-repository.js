import api from '@/repositories/repository'
import CatInfo from '@/model/cat-info'

const toModelCatInfo = (catInfo) => {
  const imageInfo = 'image' in catInfo ? catInfo['image'] : undefined
  const imageId = imageInfo ? imageInfo['id'] : undefined
  const imageWidth = imageInfo ? imageInfo['width'] : undefined
  const imageHeight = imageInfo ? imageInfo['height'] : undefined
  const imageUrl = imageInfo ? imageInfo['url'] : undefined

  return new CatInfo (
    catInfo['id']
    , catInfo['name']
    , catInfo['description']
    , catInfo['life_span']
    , catInfo['wikipedia_url']
    , catInfo['reference_image_id']
    , imageId
    , imageWidth
    , imageHeight
    , imageUrl
  )
}

const toModelCatInfos = (apiResponse) => {
  const cats = []
  apiResponse.forEach((catInfo) => {
    cats.push(toModelCatInfo(catInfo))
  })
  return cats
}

export const getCatInfos = () => {
  return api.get(`/breeds`)
    .then(function (response) {
      return toModelCatInfos(response.data)
    })
}

export const getCatInfo = (catId) => {
  return api.get(`/breeds/${catId}`)
    .then(function (response) {
      return toModelCatInfo(response.data)
    })
}

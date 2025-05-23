import { groq } from 'next-sanity';

export const carousel1Query = groq`
  _type == "carousel-1" => {
    _type,
    padding,
    direction,
    colorVariant,
    size,
    orientation,
    indicators,
    images[]{
      asset->{
        _id,
        url,
        mimeType,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
  },
`;

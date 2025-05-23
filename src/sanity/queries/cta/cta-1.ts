import { groq } from 'next-sanity';

export const cta1Query = groq`
  _type == "cta-1" => {
    _type,
    padding,
    direction,
    colorVariant,
    sectionWidth,
    stackAlign,
    tagLine,
    title,
    body[]{
      ...,
      _type == "image" => {
        ...,
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
        }
      }
    },
    links[] {
      ...,
      _type,
      _type == 'reference' => @->{_id, _type, title, slug},
    },
  },
`;

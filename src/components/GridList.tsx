import styled from 'styled-components'

// Category data
const categories = [
  {
    title: 'Photography',
    shortDescription: [
      'Drone Photography',
      'Interiors',
      'Exteriors / Architectural',
    ],
    description: [
      'Every photograph we produce finds the beauty in your property while serving as a profitable asset.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
  },
  {
    title: 'Virtual Staging',
    shortDescription: null,
    description: [
      'Our staging will help you sell the potential of your space.',
      ' We can work off of our own photography or photos you provide.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
  },
  {
    title: 'Renderings',
    shortDescription: ['Interiors', 'Exteriors'],
    description: [
      'Renderings are the gold standard in pre-construction marketing.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
  },
  {
    title: 'Interactive Tours',
    shortDescription: ['Matterport', 'Video Walkthroughs'],
    description: [
      'Give your audience the ability to explore your property without requiring in-person travel.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
  },
  {
    title: 'Floor Plans',
    shortDescription: ['On-site Measure', '2D Floor Plans', '3D Floor Plans'],
    description: [
      'We produce laser-precise floor plans faster than any other service.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
  },
  {
    title: 'Video',
    shortDescription: [
      'Drone Cinematography',
      'Interiors',
      'Exteriors / Architectural',
    ],
    description: [
      'Video content has higher engagement and will help your property stand out online.',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww',
  },
]

// TYPES
interface Category {
  title: string
  shortDescription: string[] | null
  description: string[]
  imageUrl: string
}
export default function GridList() {
  // Container Component
  // fetch data from API

  return (
    <RootLayout>
      <SectionHeading>
        <h1>
          We make creative media that <span>adds value</span>
        </h1>
      </SectionHeading>
      <CategoryList categories={categories} />
    </RootLayout>
  )
}

// CategoryList Component
function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <FeaturedList>
      {categories.map((category) => (
        <li key={category.title}>
          <CategoryCard category={category} />
        </li>
      ))}
    </FeaturedList>
  )
}

// CategoryCard Component
function CategoryCard({ category }: { category: Category }) {
  return (
    <CardContainer>
      <CardContainerImage>
        <img className='' src={category.imageUrl} alt={category.title} />
      </CardContainerImage>
      <CardContainerDescription>
        <div>
          <h3>{category.title}</h3>
          {category.shortDescription && (
            <ul>
              {category.shortDescription.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          )}
          {category.description.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
      </CardContainerDescription>
    </CardContainer>
  )
}

// RootLayout Component
const RootLayout = styled.div`
  position: relative;
  max-width: 1541px;
  padding: 108px 84px;
  background: #f5f5f8;
  margin-right: auto;
  margin-left: auto;
`

// SectionHeading Component
const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 80px;

  h1 {
    font-family: 'Poppins';
    max-width: 730px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 55px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #1b264f;
    span {
      color: #506bca;
    }
  }
`

// FeaturedList Component
const FeaturedList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 30px;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    flex 1 1 calc(33% - 30px);
    box-sizing: border-box;
  }
`
// CardContainer Component
const CardContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`

// CardContainerImage Component
const CardContainerImage = styled.div`
  flex: 1;
  height: 336px;

  img {
    display: block;
    object-fit: cover;
    object-position: left;
    width: auto;
    height: 100%;
  }
`

// CardContainerDescription Component
const CardContainerDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 30px 34px 34px;
  gap: 56px;
  height: 336px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    color: #353844;

    h3 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 8px;
      list-style: none;

      li {
        position: relative;
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 26px;
        color: #353844;

        &::before {
          content: '';
          position: absolute;
          left: -18px;
          top: 50%;
          transform: translateY(-50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: hsla(33, 47%, 66%, 1);
        }
      }
    }

    p {
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 24px;
    }
  }
`

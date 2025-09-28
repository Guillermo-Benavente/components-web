# Components Web

Reusable React components for building web pages. All components are fully customizable.

## Installation

```bash
npm install @guillermob/components-web
```

## Usage

```jsx
import { Template, Section, CardWithImage } from "@guillermob/components-web";

export default function App() {
  return ( 
    <Template>
            <Section
                bgImage={'backgroundImage.png'}
                isWhite
            >
                <h1>Home page</h1>
            </Section>
            <Section>
                <CardWithImage
                    title={'Title of the topic'}
                    description={'description'}
                    image={'DescriptiveImageOfTheTopic.png'}
                />
            </Section>
        </Template>
  );
}
```
## Components

- **Header**: Responsive header with navigation.

- **Footer**: Footer with copyright.

- **SocialMedia**: Social media icons.

- **Section**: Section wrapper with optional background image.

- **CardWithImage**: Card layout with image and text.

- **Template**: Page wrapper with header and footer.

- **TemplateNotFound**: 404 page template.

- **ScrollToTop**: Scrolls window to top on route change.
# Components Web

Reusable React components for building web pages. All components are fully customizable.

## Installation

```bash
npm install @guillermobm/components-web
```

## Usage

```jsx
import { Template, Section, CardWithImage } from "@guillermobm/components-web";

export default function App() {
  return ( 
    <Template>
        <Section bgImage={'backgroundImage.png'}>
            <h1>Home page</h1>
        </Section>
        <Section>
            <CardWithImage image={'DescriptiveImageOfTheTopic.png'}>
                <h2>Title of the topic</h2>
                <p>description</p>
            </CardWithImage>
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

## License

This library is **privative**. Only authorized users may use, copy, or modify it.  

> Note: Even though this package is published on npm, it is **not open source** and its use is restricted to authorized users only.
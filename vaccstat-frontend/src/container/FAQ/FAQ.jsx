import React from 'react'
import { Accordion } from '../../components/index';
import { StyledFAQ } from './StyledFAQ.styled';

export default function FAQ() {
    const accordionData = [
        {
            title: 'Why do I need a vaccination certificate?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'Who is responsible for providing the vaccination certificate?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'Where can I download vaccination certificate from?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
        {
            title: 'The vaccination certificate made available to me, do not show correct date on which I have been vaccinated, what is the reason and how to correct it?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.`
        },
    ];

    return (
        <StyledFAQ>
            <div className="app__faq app-container">
                <h1 className="app-h1">Frequently Asked Questions</h1>
                <div className="app__faq-accordion-menu">
                    <h2>Vaccination Cerificate</h2>
                    <div className="border"></div>
                    {accordionData.map(({title, content}) => 
                        <Accordion title={title} content={content} />
                    )}
                </div>
                <div className="app__faq-privacy">
                    <h2>Privacy Statement</h2>
                    <div className="border"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit totam eaque nulla. Tenetur, odit. Unde asperiores doloribus eveniet voluptatum odio, maiores veniam cupiditate dolorum.</p>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates facilis distinctio quasi optio delectus adipisci iure eius, ducimus eum corporis error, corrupti assumenda consequuntur aliquam libero tenetur deserunt voluptate provident suscipit voluptas quod natus illo! Nemo, blanditiis delectus? Nihil eos accusantium similique praesentium? Unde commodi vitae culpa neque delectus deleniti sapiente doloribus iste numquam corporis officia quidem amet laboriosam recusandae totam deserunt ipsam, quas dolor molestias labore necessitatibus rerum illum possimus molestiae? Vero temporibus expedita distinctio doloremque autem fuga labore animi nisi, laborum eaque dolores reiciendis quaerat eum officia voluptatibus ratione cum soluta nihil consequuntur magni alias voluptatem iure.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates facilis distinctio quasi optio delectus adipisci iure eius, ducimus eum corporis error, corrupti assumenda consequuntur aliquam libero tenetur deserunt voluptate provident suscipit voluptas quod natus illo! Nemo, blanditiis delectus? Nihil eos accusantium similique praesentium? Unde commodi vitae culpa neque delectus deleniti sapiente doloribus iste numquam corporis officia quidem amet laboriosam recusandae totam deserunt ipsam, quas dolor molestias labore necessitatibus rerum illum possimus molestiae? Vero temporibus expedita distinctio doloremque autem fuga labore animi nisi, laborum eaque dolores reiciendis quaerat eum officia voluptatibus ratione cum soluta nihil consequuntur magni alias voluptatem iure.</p>
                    </div>
                </div>
            </div>
            
        </StyledFAQ>
    )
}

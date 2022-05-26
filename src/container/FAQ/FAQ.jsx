import React from 'react'
import { Accordion } from '../../components/index';
import { StyledFAQ } from './StyledFAQ.styled';

export default function FAQ() {
    const accordionData = [
        {
            title: 'Why do I need a vaccination certificate?',
            content: `A COVID Vaccine Certificate (CVC) issued by the government offers an assurance to the beneficiary on the vaccination, and type of vaccine used, and the certificate also provides the next vaccination due. 
                        It also is evidence for the beneficiary to prove to any entities which may require proof of vaccination, especially in case of travel. Vaccination protects individuals from disease and reduces their risk of spreading the virus. 
                        Therefore, there could be a requirement in the future to produce a certificate for certain kinds of social interactions and international travel.`
        },
        {
            title: 'Who is responsible for providing the vaccination certificate?',
            content: `The Vaccination Center is responsible for generating your certificate and
                     for providing a printed copy post-vaccination on the day of vaccination itself.`
        },
        {
            title: 'Where can I download vaccination certificate from?',
            content: `You can download the vaccination certificate from the VaccStat website by following the simple steps.`
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
                    <h2>Privacy Policy for VaccStat</h2>
                    <div className="border"></div>
                    <p>At VaccStat, accessible from www.vaccstat.com, one of our main priorities is the privacy of our visitors. 
                        This Privacy Policy document contains types of information that is collected and recorded by VaccStat and how we use it.</p><br/>
                    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p><br/>
                    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to 
                        the information that they shared and/or collect in VaccStat. This policy is not applicable to any information collected offline or via channels other than this website.
                         Our Privacy Policy was created with the help of the Free Privacy Policy Generator.</p>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Consent</p>
                        <p>You hereby consent to our Privacy Policy and agree to its terms by using our website.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Information We Collect</p>
                        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
                            will be made clear to you at the point we ask you to provide your personal information.</p><br/>
                        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, 
                            the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p><br/>
                        <p>When you register for an Account, we may ask for your contact information, 
                            including items such as name, company name, address, email address, and telephone number.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">How we use your information</p>
                        <p>•	Provide, operate, and maintain our website</p>
                        <p>•	Improve, personalize, and expand our website</p>
                        <p>•	Understand and analyze how you use our website</p>
                        <p>•	Develop new products, services, features, and functionality</p>
                        <p>•	Communicate with you, either directly or through one of our partners, 
                                including for customer service, to provide you with updates and other information 
                                relating to the website, and for marketing and promotional purposes</p>
                        <p>•	Send you emails</p>
                        <p>•	Find and prevent fraud</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Log Files</p>
                        <p>VaccStat follows a standard procedure of using log files. These files log visitors when they visit websites.
                             All hosting companies do this and are a part of hosting services' analytics. The information collected by log
                            files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and
                            possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, 
                            administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Advertising Partners Privacy Policies</p>
                        <p>You may consult this list to find the Privacy Policy for each of the advertising partners of VaccStat.</p><br/>
                        <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and 
                            links that appear on VaccStat, which are sent directly to users' browser. They automatically receive your IP address when this occurs. 
                            These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p><br/>
                        <p>Note that VaccStat has no access to or control over these cookies that are used by third-party advertisers.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Third Party Privacy Policies</p>
                        <p>VaccStat's Privacy Policy does not apply to other advertisers or websites. 
                            Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                             It may include their practices and instructions about how to opt out of certain options.</p><br/>
                        <p>You can choose to disable cookies through your individual browser options.
                           To know more detailed information about cookie management with specific web browsers, 
                           it can be found on the browsers' respective websites.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">CCPA Privacy Rights (Do Not Sell My Personal Information)</p>
                        <p>Under the CCPA, among other rights, California consumers have the right to:</p><br/>
                        <p>• Request that a business that collects a consumer's personal data disclose the categories 
                            and specific pieces of personal data that a business has collected about consumers.</p>
                        <p>• Request that a business deletes any personal data about the consumer that a business has collected.</p>
                        <p>• Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p><br/>
                        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">GDPR Data Protection Rights</p>
                        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p><br/>
                        <p>• The right to access – You have the right to request copies of your personal data. 
                            We may charge you a small fee for this service.</p>
                        <p>• The right to rectification – You have the right to request that we correct any information you believe is inaccurate. 
                            You also have the right to request that we complete the information you believe is incomplete.</p>
                        <p>• The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
                        <p>• The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
                        <p>• The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
                        <p>• The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p><br/>
                        <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                    </div>
                    <div className="app__faq-privacy-section">
                        <p className="app__faq-privacy-section-title">Children's Information</p>
                        <p>Another part of our priority is adding protection for children while using the internet. 
                            We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p><br/>
                        <p>VaccStat does not knowingly collect any Personal Identifiable Information from children under the age of 11. 
                            If you think that your child provided this kind of information on our website, we strongly encourage you to contact us
                             immediately and we will do our best efforts to promptly remove such information from our records.</p>
                    </div>
                </div>
            </div>
            
        </StyledFAQ>
    )
}

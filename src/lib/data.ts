import type { LucideIcon, LucideProps } from 'lucide-react';
import {
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { icons } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'Services', href: '/services' },
  { name: 'Trainings', href: '/trainings' },
  { name: 'Careers', href: '/careers' },
  { name: 'Support', href: '/support' },
  { name: 'Contact Us', href: '/contact' },
];

export type Service = {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: keyof typeof icons;
  imageId: string;
};

export const services: Service[] = [
    {
    title: 'Domiciliary Care',
    slug: 'domiciliary-care',
    description: 'Flexible care visits to support your independent living at home.',
    longDescription: 'Domiciliary Care, also known as home care, involves our carers visiting you at home to help with a wide range of tasks. From personal care and medication reminders to meal preparation and light housekeeping, we provide the support you need to live comfortably and independently in your own surroundings.',
    icon: 'Users',
    imageId: 'service-domiciliary-care',
  },
  {
    title: 'Supported Living Services',
    slug: 'supported-living-services',
    description: 'Personalised support to help you live independently in your own home or in supported accommodation.',
    longDescription: 'Our Supported Living services are designed to empower individuals with various needs to live as independently as possible. We provide tailored support in your own home or in a supported living setting, focusing on developing life skills, managing daily tasks, and fostering community integration.',
    icon: 'Building',
    imageId: 'service-supported-living',
  },
    {
    title: 'Overnight & 24 Hour Live in Care Services',
    slug: 'live-in-care',
    description: 'Continuous care and support in the comfort of your own home, day and night.',
    longDescription: 'Our Live-in Care service provides round-the-clock support from a dedicated carer who lives with you in your home. This ensures continuous companionship and assistance, promoting independence and peace of mind for you and your loved ones. We tailor our care plans to your specific needs, routines, and preferences, including overnight and 24-hour options.',
    icon: 'Home',
    imageId: 'service-live-in-care',
  },
  {
    title: 'Respite Care Services',
    slug: 'respite-care',
    description: 'Short-term care to give regular carers a well-deserved break.',
    longDescription: 'Our Respite Care service offers temporary support, allowing primary carers to take a break, rest, and recharge. Whether it\'s for a few hours, a few days, or longer, we provide professional and compassionate care, ensuring your loved one is in safe hands while you take time for yourself.',
    icon: 'Clock',
    imageId: 'service-respite-care',
  },
  {
    title: 'Specialist Services',
    slug: 'specialist-care',
    description: 'Expert care for complex conditions, led by healthcare professionals.',
    longDescription: 'For individuals with complex health needs, our Specialist Care service provides expert support managed by qualified healthcare professionals. We cover a range of conditions, ensuring that you receive clinical expertise and personalised care in the comfort of your own home.',
    icon: 'Stethoscope',
    imageId: 'service-specialist-care',
  },
    {
    title: 'CQC Registration Consultancy Services',
    slug: 'cqc-consultancy',
    description: 'Expert guidance to navigate the CQC registration process successfully.',
    longDescription: 'Our consultancy service provides comprehensive support for healthcare providers seeking to register with the Care Quality Commission (CQC). We offer expert advice, assistance with documentation, and preparation for inspections to ensure you meet all regulatory requirements.',
    icon: 'FileText',
    imageId: 'service-cqc-consultancy',
  },
  {
    title: 'Medical Services',
    slug: 'medical-services',
    description: 'Professional medical support delivered in your home environment.',
    longDescription: 'We provide a range of medical services in the home, delivered by qualified healthcare professionals. This can include wound care, medication management, and monitoring of chronic conditions, ensuring you receive clinical care without needing to travel.',
    icon: 'HeartPulse',
    imageId: 'service-medical-services',
  },
  {
    title: 'Other Services',
    slug: 'other-services',
    description: 'A range of additional services to meet your unique needs.',
    longDescription: 'We understand that everyone\'s needs are different. Our "Other Services" category covers a variety of additional support options, including companionship, personal care, dementia care, and more. Contact us to discuss your specific requirements.',
    icon: 'Plus',
    imageId: 'service-other-services',
  },
];

export const pageData = {
    about: {
        title: "About Symbolic Care",
        content: "Symbolic Care is a leading, GP-led provider of high-quality adult care services based in London. Our mission is to deliver ethical, reliable, and person-centered care that enables individuals to live with dignity and independence in their own homes. Founded on principles of compassion and clinical excellence, we strive to make a positive difference in the lives of our clients and their families."
    },
    whyChooseUs: {
        title: "Why Choose Us?",
        content: "Choosing a care provider is a significant decision. At Symbolic Care, we stand apart through our GP-led approach, ensuring clinical oversight and the highest standards of care. Our carers are not only highly trained and vetted but are also chosen for their empathy and dedication. We are committed to ethical practices, transparent communication, and creating bespoke care plans that truly reflect the individual needs and wishes of each client."
    },
    services: {
        title: "Our Services",
        content: "We offer a comprehensive range of care services designed to meet diverse needs. From 24/7 live-in care to flexible domiciliary visits, our support is tailored to you. Explore our services to find the right fit for you or your loved one."
    },
    trainings: {
        title: "Trainings and Development",
        content: "At Symbolic Care, we believe that continuous learning is key to providing outstanding care. We invest heavily in the training and professional development of our staff, covering everything from mandatory healthcare certifications to specialised training in areas like dementia and palliative care. This commitment ensures our team is equipped with the latest skills and knowledge to support our clients effectively."
    },
    careers: {
        title: "Careers with Us",
        content: "Are you a compassionate and dedicated individual looking to make a real difference? Symbolic Care offers rewarding career opportunities in the care sector. We are looking for people who share our values of empathy, respect, and professionalism. Join our team and become part of a supportive organization that values its employees and provides pathways for growth and development."
    },
    support: {
        title: "Support for You",
        content: "Navigating the world of care can be challenging. Our dedicated support team is here to help you every step of the way. Whether you have questions about funding, need advice on the right type of care, or simply want to talk through your options, we offer a friendly, no-obligation consultation. We also provide ongoing support to our clients and their families to ensure a smooth and positive care experience."
    }
};

export const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
]

export const footerLogos = [
    { name: 'CQC Logo', href: '#', imageUrl: 'https://placehold.co/128x64/ffffff/000000?text=CQC' },
    { name: 'ICO Logo', href: '#', imageUrl: 'https://placehold.co/128x64/ffffff/000000?text=ICO' },
    { name: 'Disability Confident Committed Logo', href: '#', imageUrl: 'https://placehold.co/128x64/ffffff/000000?text=Disability+Confident' },
    { name: 'Skills Provider Logo', href: '#', imageUrl: 'https://placehold.co/128x64/ffffff/000000?text=Skills+Provider' },
    { name: 'U Check Logo', href: '#', imageUrl: 'https://placehold.co/128x64/ffffff/000000?text=U+Check' },
];

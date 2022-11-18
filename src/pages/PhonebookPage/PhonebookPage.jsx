import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';

const PhonebookPage = () => {
  return (
    <>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <>
          <ContactsFilter />
          <ContactsList />
        </>
      </Section>
    </>
  );
};

export default PhonebookPage;

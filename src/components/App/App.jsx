import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';
import FormRegistration from 'components/FormRegistration/FormRegistration';
import FormLogin from 'components/FormLogin/FormLogin';

function App() {
  return (
    <>
      <FormRegistration />
      <FormLogin />
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
}

export default App;

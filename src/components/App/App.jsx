import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';

function App() {
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
}

export default App;

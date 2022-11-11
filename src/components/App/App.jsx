import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { useGetContactsQuery } from 'services/ApiSlice';

function App() {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  return (
    <>
      <Section>
        <ContactForm contacts={contacts} />
      </Section>
      <Section>
        <>
          <ContactsFilter contacts={contacts} />
          {isLoading && (
            <SkeletonTheme highlightColor="#000000">
              <Skeleton />
            </SkeletonTheme>
          )}
          {error && <Notification text={error.data} />}
          {!error && <ContactsList contacts={contacts} />}
        </>
      </Section>
    </>
  );
}

export default App;

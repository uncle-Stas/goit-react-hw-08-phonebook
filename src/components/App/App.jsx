// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactsList from 'components/ContactsList/ContactsList';
// import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
// import Section from 'components/Section/Section';
// import FormRegistration from 'components/FormRegistration/FormRegistration';
// import FormLogin from 'components/FormLogin/FormLogin';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Appbar from 'components/Appbar/Appbar';

const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
// import SignupPage from 'pages/SignupPage/SignupPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import PhonebookPage from 'pages/PhonebookPage/PhonebookPage';
// import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<SignupPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/phonebook" element={<PhonebookPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
    // <>
    //   <FormRegistration />
    //   <FormLogin />
    //   <Section>
    //     <ContactForm />
    //   </Section>
    //   <Section>
    //     <>
    //       <ContactsFilter />
    //       <ContactsList />
    //     </>
    //   </Section>
    // </>
  );
}

export default App;

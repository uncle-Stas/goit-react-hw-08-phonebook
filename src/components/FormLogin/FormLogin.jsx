//
import Button from 'components/Button/Button';
const FormLogin = () => {
  return (
    <form>
      <label>
        Email:
        <input type="email" name="userEmail" />
      </label>
      <label>
        Password:
        <input type="password" name="userPassword" />
      </label>
      <Button type="submit" text="Login" />
    </form>
  );
};

export default FormLogin;

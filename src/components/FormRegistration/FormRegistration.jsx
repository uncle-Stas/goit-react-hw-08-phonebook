//

const { default: Button } = require('components/Button/Button');

const FormRegistration = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="userName" />
      </label>
      <label>
        Email:
        <input type="email" name="userEmail" />
      </label>
      <label>
        Password:
        <input type="password" name="userPassword" />
      </label>
      <Button type="submit" text="Register" />
    </form>
  );
};

export default FormRegistration;

<template>
  <div class="register-page">
    <header>
      <h3>
        Insta
        <span>Clone</span>
      </h3>
      <h4>Register</h4>
    </header>
    <main class="form-group">
      <input type="text" v-model="forename" placeholder="Forename" />
      <input type="text" v-model="surename" placeholder="Surename" />
      <input type="text" name id v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button class="login-btn">Register</button>
    </main>
    <footer>
      <p>
        Alredy Registered?
        <router-link class="link" to="/login">Sign in</router-link>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      forename: "",
      surename: "",
      email: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.register-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;

  header {
    padding: 15px 25px;
    h3 {
      color: #000;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      margin: 0;
      span {
        font-weight: 300;
      }
    }

    h4 {
      color: #888;
      font-size: 24px;
      text-align: center;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }

  .form-group {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 15px;

    input {
      width: 100%;
      height: 30px;
      border: 1px solid #ddd;
      margin-bottom: 15px;
      text-indent: 5px;
      background: #eee;
      outline: none;

      &:focus {
        border: 1px solid #ccc;
      }
    }

    button {
      width: 100%;
      height: 30px;
      background: #ffce00;
      appearance: none;
      border: none;
      outline: none;
      border-radius: 8px;
      color: #171717;
      font-size: 18px;
      font-weight: 700;
    }
  }

  footer {
    width: calc(100% - 50px);
    height: 20px;
    background: #eee;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #888;
      font-size: 16px;
      margin: 0px;
      padding: 0px;
      text-align: center;
    }
    .link {
      color: #e35205;
      text-decoration: none;
      font-weight: 700;
    }
  }
}
</style>


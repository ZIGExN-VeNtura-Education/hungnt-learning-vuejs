<template>
  <div id="login\-form">
    <h1>Authentication</h1>
    <p>Fill out this form to login.</p>
    <br>
    <hr>
    <br>

    <form action="">
      <div class="form-field">
        <label for="email">Email</label>
        <br>
        <input type="email" placeholder="Enter your email" id="email" name="email" required>
      </div>

      <div class="form-field">
        <label for="email">Password</label>
        <br>
        <input type="password" placeholder="Enter your password" id="pwd" name="pwd" required>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

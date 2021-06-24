<template>
  <h1>LOGIN PAGE</h1>
  <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form>
        <p>
          Don't have an account?
          <Link to="/register">
            <Button variant="info" size="sm" className="ml-2">
              Register
            </Button>
          </Link>
        </p>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>
const Home = {
  template: `
    <div>
      <h1>Ini {{text}}</h1>
      <button @click='toggle'>Toggle Show / Hide Other text</button>
      <br></br>
      <h2 v-if='isEnable'>Pee ka boo !</h2>
      <a href='/about'>About page</a>
    </div>
  `,
  data () {
    return {
      text: 'Home',
      isEnable: false
    }
  },
  methods: {
    toggle() {
      this.isEnable = !this.isEnable
    }
  },
  created () {
    window.document.title = 'Home - Vue'
  }
}

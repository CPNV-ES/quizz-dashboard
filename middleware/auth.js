/**
 * Auth middleware
 * Checks if the user is correctly authenticated
 *
 * @param {Object} param0
 */
export default function ({ redirect, app }) {
  if (localStorage.getItem('quizz-token') === null) {
    // Redirect the user to login page, he dont have authentication token
    console.warn('Connectez-vous pour acceder a cette page !')
    redirect('/login')
  } else {
    // the token exists, set the header for axios
    app.$axios.setHeader('quizz-token', localStorage.getItem('quizz-token'))
  }
}
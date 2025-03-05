function WelcomeMessage({ todoItems }) {
  if (todoItems.length === 0) {
    return <p>Enjoy Your Day</p>;
  }
}

export default WelcomeMessage;

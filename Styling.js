/**
 * Styling on React
 */

//* Example 1 inline styling
const MyComponent = () => {
  return (
    <div>
      // CSS are pass as an object
      <h1 style={{ color: "red" }} />
    </div>
  );
};

//** Example 2

const MyComponent1 = () => {
  const styles = { color: "red", fontSize: "2em" };
  return (
    <div>
      // CSS are pass as an object
      <h1 style={styles} />
    </div>
  );
};

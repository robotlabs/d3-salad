const chartTest = (scope) => {
  console.log(': I am chartTest :', this, scope);
  const a1 = () => {
    console.log(': I am a1 :', this, scope);
  }
  const publicOutput = {
    a1: a1,
    update: () => {
      console.log('ciao update');
    }
  }
  return publicOutput
}
export default chartTest;
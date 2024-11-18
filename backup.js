function getBackup(resource, date, weekDisplay) {
  let result;
  // console.log(`resource: ${resource} ; date: ${date}`);
  const dateReformat = date.replaceAll("/", "");
  // console.log(`dateReformat: ${dateReformat}`);
  let variableName = `R${resource}D${dateReformat}`;
  // console.log(`variableName: ${variableName}`);
  const globalObject = globalThis;
  // console.log(`globalObject: ${globalObject[variableName]}`);
  if (globalObject[variableName] != undefined) {
    result = globalObject[variableName];
  } else {
    result = `<?xml version="1.0" encoding="UTF-8"?><events></events>`;
  }
  // console.log(`result: ${result}`);
  return result;
}

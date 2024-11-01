/**
 * @param {string} name
 * @return {string}
 */
export function removeHashAndAfter(name) {
  if (typeof name !== "string") {
    return "";
  }
  const hashIndex = name.indexOf("#");
  if (hashIndex === -1) {
    return name;
  }
  return name.slice(0, hashIndex).trim();
}

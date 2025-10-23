export async function validateSubmission(phrase) {
  const canonical = 'we are the wave';
  return phrase.trim().toLowerCase() === canonical;
}
// import hanspell from "hanspell";

// async function checkSpell(sentence) {
//   const TIMEOUT_MS = 6000;
//   const lastToken = getLastToken(sentence);

//   return new Promise((resolve, reject) => {
//     hanspell.spellCheckByPNU(
//       lastToken,
//       TIMEOUT_MS,
//       (res) => resolve(returnRes(res)),
//       (err) => reject(returnErr(err))
//     );
//   });
// }

// function getLastToken(sentence) {
//   const tokens = sentence.trim().split(" ");
//   return tokens[tokens.length - 1];
// }

// function returnRes(res) {
//   if (res.length === 0) {
//     return {
//       token: "",
//       suggestions: [],
//     };
//   } else {
//     return {
//       token: res[0].token,
//       suggestions: res[0].suggestions,
//     };
//   }
// }

// function returnErr(err) {
//   return {
//     error: err,
//   };
// }

// export default checkSpell;

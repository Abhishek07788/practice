
// function say(){
//     console.log("hello");
// }

// function say2(){
//     console.log("hello");
// }

// export {say, say2}

const inputMatrix = [  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];
const outputMatrix = flipMatrix(inputMatrix);
console.log(outputMatrix);

function flipMatrix(matrix){
    const N = matrix.length;
    const M = matrix[0].length;

    for(let i=0; i<M; i++){
        let bag = "";
        for(let j=0; j<N; j++){
          bag += matrix[j][i]+ " "; 
        }
        return bag;
    }
}

    // // create a new empty matrix to store the flipped values
    // const flippedMatrix = [];
    // console.log('flippedMatrix: ', flippedMatrix);
    // for (let i = 0; i < N; i++) {
    //   flippedMatrix.push(new Array(M));
    // }
    // console.log('flippedMatrix: ', flippedMatrix);
  
    // // iterate through each cell in the matrix and flip its value
    // for (let i = 0; i < N; i++) {
    //   for (let j = 0; j < M; j++) {
    //     if (matrix[i][j] === 0) {
    //       flippedMatrix[i][j] = 1;
    //     } else {
    //       flippedMatrix[i][j] = 0;
    //     }
    //   }
    // }
  
    // return flippedMatrix;
//   }
  
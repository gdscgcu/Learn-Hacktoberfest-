function ArrayChallenge(arr) { 

let count=0;
  // code goes here  
  for(let x=arr[0];x<arr[1];x++)
  {
    if(x>=arr[2] &&x<=arr[3])
    {
      count+=1;
    }
  }
  return (count>=arr[4])?true:false

}
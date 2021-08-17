    
  public class Solution {
    
    public static int getMaxSquare(int area, int start, int end){
        int mid = (start+end)/2;
        int nextMid = mid*mid;
        
        // only one diff
        if( Math.abs(start - end) == 1){
            int mid_1 = (int)Math.pow(mid+1, 2);
            if(mid_1<=area) return mid_1;
            else return nextMid;
            
        }else{
            if(nextMid< area){
                return getMaxSquare(area, mid, end);
            }else if(nextMid> area){
                return getMaxSquare(area, start, mid);
            }else if(nextMid == area){
                return nextMid;
            }
            
        }
        return 0;
        
    }
    
    public static int[] solution(int area) {

        ArrayList<Integer> result = new ArrayList<Integer>();
        
        while(area >  0){
           int squarePossible = getMaxSquare(area, 1, 1000);
           result.add(squarePossible);
           area -= squarePossible;
        }
        int[] finalResult = new int[result.size()];
        for(int i=0;i<result.size(); i++){
            finalResult[i] = result.get(i);
        }
        return finalResult;

    }
}
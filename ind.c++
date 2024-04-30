// #include<bits/stdc++.h>
// using namespace std;
// bool checkPalindrome(string s1,string s2,int m ,int n){
//     int j=0;
//     for(int i=0;i<n&&j<m;i++){
//         if(s1[i]==s2[j]){
//             j++;
//         }
//     }
//     return (j==m);
// }
// int main()
// {
//     string s1="devesh";
//     string s2="dev";
//     int m=s1.length();
//     int n=s2.length();
//     checkPalindrome(s1,s2,n,m);

//      return 0;
// }

// #include<bits/stdc++.h>
// using namespace std;
// bool Anagrame(string s1,string s2)
// {
//     if(s1.length()!=s2.length()){
//         return false;
//     }
//     sort(s1.begin(),s1.end());
//     sort(s2.begin(),s2.end());
//     return (s1==s2);

// }
// int main()
// {
//     string s1="gfg";
//     string s2="gfg";
//     cout<<Anagrame(s1,s2);
    
//      return 0;
// }

// #include<bits/stdc++.h>
// using namespace std;
// int leftmost(string str){
//     for(int i=0;i<str.length();i++){
//         for(int j=i+1;j<str.length();j++){
//             if(str[i]==str[j])
//             {
//                 return i;
//             }
//         }
//     }
//     return -1;
// }
// int main()
// {
//     leftmost("'avvb'");
//      return 0;
// }

#include<bits/stdc++.h>
using namespace std;
// int leftmost(string st){
//     int count[256]={0};
//     for(int i=0;i<st.length();i++){
//     count[st[i]]++;
//     }
//     for(int i=0;i<st.length();i++){
//         if(count[st[i]]>i){
//             return i;
//         }
//     }
//         return -1;
// }
// int leftmost(string str){
//     int CHAR[256];
//     fill(f)
// }
int main()
{
    leftmost("'avvb'");
     return 0;
}
#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define len length()

int main() {
    ll t;
    cin >> t;

    while(t--) {
        string s, p;
        cin >> s >> p;

        map<char, int> occP;
        for(int i=0; i<p.len; i++) occP[p[i]]++;

//        for(auto it=occP.begin(); it!=occP.end(); it++) cout << it->first << " " << it->second << endl;

        vector<char> s1;
        for(int i=0; i<p.len; i++) s1.push_back(p[i]);


        sort(s.begin(), s.end());
        for(int i=0; i<s.len; i++) cout << s[i];
        cout << endl;

        int len1 = p.len;
        // use for comparison
        char st = p[0];
        char e = p[p.len-1];

        int startInd = 0;           // index where p starts in s
        bool status = false;           // to check s[i] is present in p or not

        for(int i=0; i<s.len; i++) {
            status = false;
            if(len1) {
                for(auto it=occP.begin(); it!=occP.end(); it++) {
                    if(s[i] == it->first) {
                        if(it->second > 0) it->second--; else break;      // if occ is over then don't decrement
                        len1--;
                        status = true;
                    }
                }
            }
        if(!status) {
                char ch = s[i];
                if(ch <= st) {
                    s1.insert(s1.begin(), ch);
                    st = ch;
                    startInd++;
                } else if(ch <= p[0]) {
                    int j = startInd;
                    while(j >= 0 && ch <= s1[j]) {
                        j--;
                    }
                    s1.insert(s1.begin() + j + 1, ch);
                } else {
                    if(ch >= e) {
                        s1.push_back(ch);
                        e = ch;
                    } else {
                        int j = startInd + p.len;
                        if(j == s1.size()) {
                            s1.push_back(ch);
                            e = ch;
                            continue;
                        }
                        while(j < s1.size()) {
                            if(ch <= s1[j]) {
                                s1.insert(s1.begin() + j + 1, ch);
                                break;
                            }
                            j++;
                        }
                    }
                }
            }
        }

        for(int i=0; i<s1.size(); i++) cout << s1[i];
        cout << endl;
    }
}

const code = `
//some comment here :D
int glob = 10;
int jack = 36;

void test_void(void){
    int a = 777;
    int b = a;
    b++;
    return;
}

int test_int_ret(int a, int b){
    a++;
    b++;
    char my_name[] = "Arash";
    return a;
}

int main(){
    char greet[] = "hello n";
    int v = 1;
    int f = 8;

    v++;
    f++;

    int k = -4 - 3 + 5 - 7 - 8 + 2 - 32;

    int e = v;

    test(1,2);

    if(v == 2) {
        int y = 5;
        y++;
    }

    if(k == 35) {
        int p = 55 + 34;
    }

    return 1;
}
`;                              document.getElementById('code').innerText = code
const token = tokenizer(code); document.getElementById('token').innerText = JSON.stringify(token, null, 2)
const parsed = parser(token); document.getElementById('parsed').innerText = JSON.stringify(parsed, null, 2)
const transformed = transformer(parsed); document.getElementById('parsed').innerText = JSON.stringify(transformed, null, 2)
const processed = processor(transformed); document.getElementById('processed').innerText = JSON.stringify(processed, null, 2)
const generated = initGenerate(processed); document.getElementById('generated').innerText = generated

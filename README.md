## Purpose

client에서 Download를 시도하면, node server에서 사용자 system에 pdf를 저장함

## Example

### How to Start?

#### 1. start react server

```
cd client
npm install
npm start
```

#### 2. start node server

```
cd server
npm install
npm build # react 코드를 es5로 compile을 먼저해야함 (babel 사용)
npm start
```

## 해결해야할 문제

- 현재는 node로 다운로드시 server 내에있는 react 코드를 사용합니다. 즉 client에 있는 react를 다운로드 하는 것이 아님
- 다운로드 시도시 client code를 server로 보내서 다운로드 시키거나, 아니면 client에서 바로 다운로드 할 수 있도록 수정이 필요함

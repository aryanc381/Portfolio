import { atom } from 'recoil';

export const web = atom({
    key: "web",
    default: true
});

export const ai = atom({
    key: "ai",
    default: false
});

export const fullStackAI = atom({
    key: "fsAI",
    default: false
});
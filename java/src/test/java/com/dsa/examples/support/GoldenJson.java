package com.dsa.examples.support;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/** Minimal JSON parser for shared golden fixtures in tests (arrays and objects only). */
public final class GoldenJson {

    private GoldenJson() {
    }

    public static Object parse(String json) {
        return new Parser(json).parseValue();
    }

    @SuppressWarnings("unchecked")
    public static List<Map<String, Object>> parseArrayOfObjects(String json) {
        Object v = parse(json);
        if (!(v instanceof List<?> list)) {
            throw new IllegalArgumentException("expected JSON array");
        }
        List<Map<String, Object>> out = new ArrayList<>();
        for (Object o : list) {
            if (!(o instanceof Map<?, ?> map)) {
                throw new IllegalArgumentException("expected array of objects");
            }
            out.add((Map<String, Object>) map);
        }
        return out;
    }

    private static final class Parser {
        private final String s;
        private int i;

        Parser(String s) {
            this.s = s;
        }

        Object parseValue() {
            skipWs();
            char c = s.charAt(i);
            if (c == '{') {
                return parseObject();
            }
            if (c == '[') {
                return parseArray();
            }
            if (c == '"') {
                return parseString();
            }
            if (c == 'n') {
                expect("null");
                return null;
            }
            if (c == 't' || c == 'f') {
                if (s.startsWith("true", i)) {
                    i += 4;
                    return Boolean.TRUE;
                }
                expect("false");
                return Boolean.FALSE;
            }
            return parseNumber();
        }

        Map<String, Object> parseObject() {
            expect('{');
            Map<String, Object> map = new LinkedHashMap<>();
            skipWs();
            if (peek('}')) {
                i++;
                return map;
            }
            while (true) {
                skipWs();
                String key = parseString();
                skipWs();
                expect(':');
                map.put(key, parseValue());
                skipWs();
                if (peek('}')) {
                    i++;
                    break;
                }
                expect(',');
            }
            return map;
        }

        List<Object> parseArray() {
            expect('[');
            List<Object> list = new ArrayList<>();
            skipWs();
            if (peek(']')) {
                i++;
                return list;
            }
            while (true) {
                list.add(parseValue());
                skipWs();
                if (peek(']')) {
                    i++;
                    break;
                }
                expect(',');
                skipWs();
            }
            return list;
        }

        String parseString() {
            expect('"');
            StringBuilder sb = new StringBuilder();
            while (i < s.length()) {
                char c = s.charAt(i++);
                if (c == '"') {
                    return sb.toString();
                }
                sb.append(c);
            }
            throw new IllegalArgumentException("unterminated string");
        }

        Number parseNumber() {
            int start = i;
            while (i < s.length()) {
                char c = s.charAt(i);
                if (Character.isDigit(c) || c == '-' || c == '.' || c == 'e' || c == 'E' || c == '+') {
                    i++;
                } else {
                    break;
                }
            }
            String num = s.substring(start, i);
            if (num.contains(".") || num.contains("e") || num.contains("E")) {
                return Double.parseDouble(num);
            }
            return Integer.parseInt(num);
        }

        void skipWs() {
            while (i < s.length() && Character.isWhitespace(s.charAt(i))) {
                i++;
            }
        }

        void expect(char ch) {
            skipWs();
            if (i >= s.length() || s.charAt(i) != ch) {
                throw new IllegalArgumentException("expected '" + ch + "' at " + i);
            }
            i++;
        }

        void expect(String lit) {
            if (!s.startsWith(lit, i)) {
                throw new IllegalArgumentException("expected " + lit + " at " + i);
            }
            i += lit.length();
        }

        boolean peek(char ch) {
            return i < s.length() && s.charAt(i) == ch;
        }
    }
}

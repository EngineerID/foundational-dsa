package com.dsa.examples.support;

import java.util.List;

/** Parse int arrays from shared golden JSON case fields. */
public final class GoldenIntArrays {

    private GoldenIntArrays() {
    }

    @SuppressWarnings("unchecked")
    public static int[] parse(Object raw) {
        List<Object> rows = (List<Object>) raw;
        int[] out = new int[rows.size()];
        for (int i = 0; i < rows.size(); i++) {
            out[i] = ((Number) rows.get(i)).intValue();
        }
        return out;
    }
}

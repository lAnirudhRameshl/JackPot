package com.fidelity.jackpot.service;

import com.fidelity.jackpot.payload.AssetClassResponse;
import com.fidelity.jackpot.repository.AssetClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AssetClassService {

    @Autowired
    private AssetClassRepository assetClassRepository;

    public List<AssetClassResponse> getAllAssetClasses() {
        return assetClassRepository.findAll().stream().map(assetClass -> {
            AssetClassResponse response = new AssetClassResponse();
            response.setAssetClassId(assetClass.getAssetClassId());
            response.setAssetClassName(assetClass.getAssetClassName());
            return response;
        }).collect(Collectors.toList());
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerifier {
    mapping(bytes32 => bool) public certificates;

    function issueCertificate(bytes32 certificateHash) public {
        certificates[certificateHash] = true;
    }

    function verifyCertificate(bytes32 certificateHash) public view returns (bool) {
        return certificates[certificateHash];
    }
}

